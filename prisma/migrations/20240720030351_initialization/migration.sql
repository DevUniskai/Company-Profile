-- CreateTable
CREATE TABLE `DetailCustomer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` VARCHAR(191) NOT NULL,
    `product_name` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_phoneNumber` VARCHAR(191) NOT NULL,
    `food_halal_non` VARCHAR(191) NOT NULL,
    `food_vegan` VARCHAR(191) NOT NULL,
    `food_beef` VARCHAR(191) NOT NULL,
    `add_notes` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DetailCustomer_order_id_key`(`order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
