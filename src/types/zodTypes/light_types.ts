import {
    MotionProps,
} from "motion/react";
import {ClassAttributes, HTMLAttributes, PropsWithoutRef, RefAttributes} from "react";
import {z} from 'zod'



type motionType = PropsWithoutRef<ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & MotionProps> & RefAttributes<HTMLDivElement>


export const LightCircleSchema = z.object({
    w: z.union([z.literal('max'),z.string(),z.number()]).default('max').readonly().optional(),
    h: z.string().or(z.number()).default('100px').readonly().optional(),
    opc:z.string().or(z.number()).default(0.5).readonly().optional(),
    blur:z.string().default('0.5').readonly().optional(),
    z:z.number().default(-1).readonly().optional(),
    c:z.string().default('white').readonly().optional(),
})
export type LightCircleProps = z.infer<typeof LightCircleSchema> & motionType

