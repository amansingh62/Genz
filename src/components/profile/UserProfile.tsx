"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "@/components/profile/SocialLinks";
import { AnimatedText } from "@/components/profile/AnimatedText";
import { LampContainer } from "@/components/ui/lamp";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";

export default function UserProfileWrapper() {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || "cmaugvhes00s5l50noq1ljfs3"}
      config={{
        loginMethods: ["wallet"],
        appearance: {
          theme: "dark",
          accentColor: "#3b82f6", // blue-500
        }
      }}
    >
      <UserProfile />
    </PrivyProvider>
  );
}

function UserProfile() {
  const { login, authenticated, user: privyUser, ready } = usePrivy();
  const [user, setUser] = useState({
    name: "Aman Singh",
    username: "aman",
    bio: "Frontend developer passionate about creating beautiful user experiences.",
    walletAddress: "", // Initialize empty, will be set if connected
    profileImage: "/placeholder.svg?height=200&width=200",
  });

  // Add debugging
  useEffect(() => {
    console.log('Privy Status:', { ready, authenticated, user: privyUser });
  }, [ready, authenticated, privyUser]);

  // Update wallet address if Privy user is authenticated
  useEffect(() => {
    if (authenticated && privyUser?.wallet?.address) {
      setUser(prev => ({ ...prev, walletAddress: privyUser.wallet?.address || "" }));
    }
  }, [authenticated, privyUser]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Function to truncate wallet address for display
  const truncateAddress = (address: string) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <div className="container mx-auto px-6 py-12 flex flex-col min-h-screen">
        <div className="mb-16">
          <Card className="bg-gray-950/80 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-10">
                {/* Profile Picture Section */}
                <div className="flex flex-col items-center gap-6">
                  <Avatar className="w-32 h-32 border-4 border-blue-500 shadow-lg transition-transform transform hover:scale-105">
                    <AvatarImage src={user.profileImage} alt={user.name} />
                    <AvatarFallback className="text-3xl bg-blue-600">{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>

                  {!isEditing ? (
                    <Button onClick={handleEdit} variant="outline" className="w-full border-blue-500 hover:bg-blue-900/40">
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex gap-3 w-full">
                      <Button onClick={handleSave} className="flex-1">✅ Save</Button>
                      <Button onClick={handleCancel} variant="outline" className="flex-1 border-red-500 hover:bg-red-900/40">
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>

                {/* Profile Information Section */}
                <div className="flex-1 space-y-6">
                  {!isEditing ? (
                    <>
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-blue-400">@{user.username}</p>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{user.bio}</p>

                      {/* Wallet Address Display */}
                      <div className="pt-2">
                        {user.walletAddress ? (
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">Wallet:</span>
                            <span className="font-mono bg-gray-800 px-3 py-1 rounded text-green-400 text-sm">
                              {truncateAddress(user.walletAddress)}
                            </span>
                            <button
                              className="text-xs text-gray-400 hover:text-blue-400"
                              onClick={() => navigator.clipboard.writeText(user.walletAddress)}
                            >
                              Copy
                            </button>
                          </div>
                        ) : (
                          <div className="text-gray-400">No wallet connected</div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={editedUser.name}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            name="username"
                            value={editedUser.username}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            name="bio"
                            value={editedUser.bio}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 min-h-24"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="walletAddress">Wallet Address</Label>
                          <Input
                            id="walletAddress"
                            name="walletAddress"
                            value={editedUser.walletAddress}
                            onChange={handleChange}
                            className="bg-gray-800 border-gray-700 font-mono"
                            disabled // Disable manual editing of wallet address
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Additional Actions */}
                  <div className="pt-4 space-y-5">
                    <div className="flex flex-wrap gap-3">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">🔐 Change Password</Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
                        onClick={() => {
                          console.log('Login clicked, Privy status:', { ready, authenticated });
                          login();
                        }}
                      >
                        {authenticated ? "🔗 Wallet Connected" : "🔗 Connect Wallet"}
                      </Button>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-lg font-medium text-gray-400 mb-4">🌐 Connect Accounts</h3>
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Lamp Light Effect */}
        <div className="mt-auto">
          <LampContainer>
            <div className="text-center mb-16">
              <AnimatedText text={`Thank you for visiting, ${user.name}!`} className="text-3xl font-bold text-blue-400" />
            </div>
          </LampContainer>
        </div>
      </div>
    </div>
  );
}