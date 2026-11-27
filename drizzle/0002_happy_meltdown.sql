CREATE TABLE "experiences" (
	"id" uuid PRIMARY KEY NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"company_abbreviation" varchar(255) NOT NULL,
	"role_name" varchar(255) NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date,
	"work_summary" text
);
