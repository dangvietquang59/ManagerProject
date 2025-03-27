"use client";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";

const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

function ProjectDetailPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-[30px] font-bold">Dự án TailwindCSS</h1>
      <div className="flex items-center justify-between">
        <AvatarGroup isBordered>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
        <p className="text-[18px] font-medium">20/2/2025 - 22/2/2025</p>
      </div>
      <div className="mt-[20px] grid grid-cols-[25%_75%] gap-[10px]">
        <Card className="p-[20px] w-full flex flex-col gap-[20px] h-fit">
          <Button color="success" onPress={onOpen}>
            Thêm thành viên
          </Button>
          <Select
            className="max-w-xs"
            label="Favorite Animal"
            placeholder="Select an animal"
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        </Card>
        <Card className="p-[20px] min-h-[500px]">
          <div className="flex items-center gap-[10px]">
            <Avatar
              className="size-[70px] text-large"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
            <div className="flex flex-col gap-[4px]">
              <h2 className="text-[16x] font-semibold">Đặng Việt Quang</h2>
              <span className="text-[14px]">Nhân viên</span>
            </div>
          </div>
          <div className="mt-[20px]">
            <h3>Danh sách công việc</h3>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <Card className="p-[20px] bg-black cursor-pointer">Task 1</Card>
              <Card className="p-[20px] bg-black cursor-pointer">Task 1</Card>
              <Card className="p-[20px] bg-black cursor-pointer">Task 1</Card>
              <Card className="p-[20px] bg-black cursor-pointer">Task 1</Card>
              <Card className="p-[20px] bg-black cursor-pointer">Task 1</Card>
              <Card className="p-[20px] bg-black cursor-pointer">Task 1</Card>
              <Card className="p-[20px] bg-black cursor-pointer">Task 1</Card>
            </div>
          </div>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Thêm thành viên mới
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-[10px] cursor-pointer">
                  <Avatar
                    className="size-[70px] text-large"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  />
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[16px]">Đặng Việt Quang</h3>
                    <span className="text-[14px]">dvquang5902@gmail.com</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Đóng
                </Button>
                <Button color="success" onPress={onClose}>
                  Xác nhận
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProjectDetailPage;
