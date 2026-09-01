import type { z } from "zod";
import type {
	apiErrorSchema,
	informationRecordSchema,
	paginationSchema,
	publicationStatusSchema,
	securityLogLevelSchema,
	securityLogSchema,
	userRoleSchema,
	userSchema,
} from "@/schemas";

export type ApiErrorPayload = z.infer<typeof apiErrorSchema>;
export type PaginationMeta = z.infer<typeof paginationSchema>;

export type PublicationStatus = z.infer<typeof publicationStatusSchema>;
export type InformationRecord = z.infer<typeof informationRecordSchema>;

export type SecurityLogLevel = z.infer<typeof securityLogLevelSchema>;
export type SecurityLog = z.infer<typeof securityLogSchema>;

export type UserRole = z.infer<typeof userRoleSchema>;
export type User = z.infer<typeof userSchema>;

export type PaginatedResponse<TItem> = {
	data: TItem[];
	meta: PaginationMeta;
};
