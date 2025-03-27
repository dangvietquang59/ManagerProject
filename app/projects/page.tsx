"use client";
import {
  Avatar,
  AvatarGroup,
  Card,
  CircularProgress,
  Pagination,
} from "@heroui/react";
import Link from "next/link";

function ProjectPage() {
  const projects = [
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 50,
    },
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 60,
    },
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 70,
    },
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 80,
    },
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 10,
    },
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 30,
    },
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 20,
    },
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 30,
    },
    {
      name: "Dự án TailwindCss",
      id: "PROJ20250222",
      begin: "22/02/2025",
      end: "22/10/2025",
      percent: 30,
    },
  ];

  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="text-[24px] font-bold">Danh sách dự án</h2>
      <div className="grid grid-cols-3 gap-[20px]">
        {projects.map((item, index) => (
          <Link key={index} href={`/projects/${item.id}`}>
            <Card
              key={index}
              className="p-[20px] flex flex-col gap-[16px] cursor-pointer border border-transparent hover:border-white transition duration-300"
            >
              <h3 className="text-[20px] font-bold mb-[20px]">{item.name}</h3>
              <AvatarGroup isBordered>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>

              <div className="flex items-center gap-[10px] justify-between">
                <p className="text-[14px]">
                  {item.begin} - {item.end}
                </p>

                <CircularProgress
                  color="success"
                  showValueLabel={true}
                  size="lg"
                  value={item.percent}
                />
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          loop
          showControls
          color="success"
          initialPage={1}
          total={5}
        />
      </div>
    </div>
  );
}

export default ProjectPage;
