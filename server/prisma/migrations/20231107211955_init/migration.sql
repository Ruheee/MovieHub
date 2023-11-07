-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie_favourite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "genre" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "cover" VARCHAR(255) NOT NULL,
    "is_watched" BOOLEAN NOT NULL DEFAULT false,
    "actors" VARCHAR(255) NOT NULL,
    "director" VARCHAR(255) NOT NULL,
    "platform" VARCHAR(255) NOT NULL,
    "rating" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_favourite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tv_show_favourite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "is_watched" BOOLEAN NOT NULL DEFAULT false,
    "actors" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tv_show_favourite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "streaming_platform" (
    "id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,

    CONSTRAINT "streaming_platform_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movie_favourite" ADD CONSTRAINT "movie_favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tv_show_favourite" ADD CONSTRAINT "tv_show_favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
