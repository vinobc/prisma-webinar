-- CreateTable
CREATE TABLE "OtherResponsibility" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "desc" TEXT NOT NULL,
    "facId" TEXT NOT NULL,
    CONSTRAINT "OtherResponsibility_facId_fkey" FOREIGN KEY ("facId") REFERENCES "Faculty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
