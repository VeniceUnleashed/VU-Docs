---
title: ExplosionEntity (Server Class)
---
### Base Classes

[SpatialEntity](/vext/ref/cls/shr/spatialentity)

## Description

## Constructors

| Constructor                                                                                            | Description |
| ------------------------------------------------------------------------------------------------------ | ----------- |
| [ExplosionEntity](/vext/ref/cls/srv/explosionentity)([Entity](/vext/ref/cls/shr/entity) **ref**) |             |

## Static Members

| Type                                                    | Name                     | Description |
| ------------------------------------------------------- | ------------------------ | ----------- |
| [TypeInformation](/vext/ref/cls/shr/typeinformation) | ExplosionEntity.typeInfo |             |

## Methods

| Type | Name                  | Parameters                                                                                                                                                                                                                                                                                                  |
| ---- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void | [Detonate](#detonate) | [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, [Vec3](/vext/ref/cls/shr/vec3) **impactNormal**, [Vec3](/vext/ref/cls/shr/vec3) **origin**, float **latency**, float **damageMultiplier**, [Vec3](/vext/ref/cls/shr/vec3) **externalDamageDirection**, float **blastAngle** |

### Detonate

> void **Detonate**([LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, [Vec3](/vext/ref/cls/shr/vec3) **impactNormal**, [Vec3](/vext/ref/cls/shr/vec3) **origin**, float **latency**, float **damageMultiplier**, [Vec3](/vext/ref/cls/shr/vec3) **externalDamageDirection**, float **blastAngle**)

#### Parameters

| Name                    | Type                                                    | Description |
| ----------------------- | ------------------------------------------------------- | ----------- |
| transform               | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |
| impactNormal            | [Vec3](/vext/ref/cls/shr/vec3)                       |             |
| origin                  | [Vec3](/vext/ref/cls/shr/vec3)                       |             |
| latency                 | float                                                   |             |
| damageMultiplier        | float                                                   |             |
| externalDamageDirection | [Vec3](/vext/ref/cls/shr/vec3)                       |             |
| blastAngle              | float                                                   |             |
