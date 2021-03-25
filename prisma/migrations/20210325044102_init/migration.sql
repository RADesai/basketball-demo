-- CreateTable
CREATE TABLE "Player" (
    "pid" INTEGER NOT NULL,
    "ln" TEXT NOT NULL,
    "fn" TEXT NOT NULL,
    "ta" TEXT NOT NULL,
    "num" TEXT NOT NULL,
    "pos" TEXT NOT NULL,
    "pts" DOUBLE PRECISION NOT NULL,
    "reb" DOUBLE PRECISION NOT NULL,
    "ast" DOUBLE PRECISION NOT NULL,
    "stl" DOUBLE PRECISION NOT NULL,
    "headshot" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    PRIMARY KEY ("pid")
);
