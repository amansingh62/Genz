import React from "react";
import ReactDOM from "react-dom";
import { 
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, 
  Button, Input, Select, SelectItem, Textarea 
} from "@heroui/react";
import { Icon } from "@iconify/react";

interface BookTrainerModalProps {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
}

export function BookTrainerModal({ isOpen, onOpenChange }: BookTrainerModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    trainer: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          trainer: "",
          message: ""
        });
        onOpenChange(false);
      }, 2000);
    }, 1500);
  };

  const trainers = [
    { id: "john", name: "John Smith - Strength & Conditioning" },
    { id: "sarah", name: "Sarah Johnson - Cardio & HIIT" },
    { id: "mike", name: "Mike Williams - Bodybuilding" },
    { id: "lisa", name: "Lisa Chen - Yoga & Flexibility" }
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  if (typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-start justify-center z-50 bg-black/50 pt-10 pointer-events-auto">
      {/* ✅ Moves Modal to the Top & Fixes Click Issues */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={(state: boolean) => onOpenChange(state)}
        size="2xl"
        scrollBehavior="inside"
        className="bg-gray-900 border border-gray-800 shadow-2xl rounded-lg p-6"
      >
        <ModalContent>
          {({ onClose }: { onClose: () => void }) => (
            <>
              {/* 🔹 Modal Header */}
              <ModalHeader className="flex flex-col gap-1 text-white">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:calendar" className="text-primary-400" />
                  <span>Book a Personal Training Session</span>
                </div>
              </ModalHeader>

              {/* 🔹 Modal Body */}
              <ModalBody>
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="p-4 rounded-full bg-success-900 mb-4">
                      <Icon icon="lucide:check-circle" className="text-4xl text-success-400" />
                    </div>
                    <h3 className="text-xl font-bold text-success-400 mb-2">Booking Successful!</h3>
                    <p className="text-center text-gray-300">
                      We have received your request and will contact you shortly to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name & Email */}
                    <Input
  label="Full Name"
  placeholder="Enter your full name"
  name="name"  // ✅ This must match state key
  value={formData.name}
  onChange={handleChange}  // ✅ Ensures state updates
  variant="bordered"
  isRequired
/>

                    <Input
                      label="Email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="bordered"
                      type="email"
                      isRequired
                    />

                    {/* Date Picker */}
                    <Input
                      label="Select Date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                    />

                    {/* Time Selector */}
                    <Select
                      label="Preferred Time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                    >
                      {timeSlots.map((slot, index) => (
                        <SelectItem key={index} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </Select>

                    {/* Trainer Selector */}
                    <Select
                      label="Select Trainer"
                      name="trainer"
                      value={formData.trainer}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                    >
                      {trainers.map((trainer) => (
                        <SelectItem key={trainer.id} value={trainer.id}>
                          {trainer.name}
                        </SelectItem>
                      ))}
                    </Select>

                    {/* Message Input */}
                    <Textarea
                      label="Additional Message (Optional)"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="bordered"
                    />
                  </div>
                )}
              </ModalBody>

              {/* 🔹 Modal Footer */}
              <ModalFooter>
                {!isSuccess && (
                  <>
                    <Button color="default" variant="flat" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button 
                      color="primary" 
                      onPress={handleSubmit}
                      isLoading={isSubmitting}
                      isDisabled={!formData.name || !formData.email || !formData.date || !formData.time}
                      startContent={!isSubmitting && <Icon icon="lucide:calendar-check" />}
                    >
                      {isSubmitting ? "Booking..." : "Book Session"}
                    </Button>
                  </>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>,
    document.body
  );
}
