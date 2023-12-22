-- AddForeignKey
ALTER TABLE "performersResults" ADD CONSTRAINT "performersResults_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
