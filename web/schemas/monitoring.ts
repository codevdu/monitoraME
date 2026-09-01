import { z } from "zod";
import { dateTimeSchema, idSchema } from "@/schemas/common";

// Ciclo de publicação usado pelos registros de informação geridos pela plataforma.
export const publicationStatusSchema = z.enum([
	"draft",
	"review",
	"published",
	"archived",
]);

// Registro de informação pública acompanhado nos fluxos de gestão e divulgação.
export const informationRecordSchema = z.object({
	id: idSchema,
	title: z.string().min(1),
	summary: z.string().optional(),
	sourceUrl: z.string().url().optional(),
	status: publicationStatusSchema,
	publishedAt: dateTimeSchema.optional(),
	updatedAt: dateTimeSchema,
});

// Níveis de severidade para eventos auditáveis de segurança e sistema.
export const securityLogLevelSchema = z.enum(["info", "warning", "error"]);

export const securityLogSchema = z.object({
	id: idSchema,
	action: z.string().min(1),
	actor: z.string().min(1),
	level: securityLogLevelSchema,
	metadata: z.record(z.string(), z.unknown()).optional(),
	occurredAt: dateTimeSchema,
});

// Papéis alinhados ao modelo de autorização do backend.
export const userRoleSchema = z.enum(["ADMIN", "MONITOR", "COMPANIES"]);

export const userSchema = z.object({
	id: idSchema,
	email: z.string().email(),
	name: z.string().min(1),
	role: userRoleSchema,
});
