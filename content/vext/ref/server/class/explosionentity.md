---
title: ExplosionEntity
---
### Base Classes

[SpatialEntity](/vext/ref/shared/class/spatialentity)

## Description

## Constructors

| Constructor                                                                                            | Description |
| ------------------------------------------------------------------------------------------------------ | ----------- |
| [ExplosionEntity](/vext/ref/server/class/explosionentity)([Entity](/vext/ref/shared/class/entity) **ref**) |             |

## Static Members

| Type                                                    | Name                     | Description |
| ------------------------------------------------------- | ------------------------ | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | ExplosionEntity.typeInfo |             |

## Methods

| Type | Name                  | Parameters                                                                                                                                                                                                                                                                                                  |
| ---- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void | [Detonate](#detonate) | [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**, [Vec3](/vext/ref/shared/class/vec3) **impactNormal**, [Vec3](/vext/ref/shared/class/vec3) **origin**, float **latency**, float **damageMultiplier**, [Vec3](/vext/ref/shared/class/vec3) **externalDamageDirection**, float **blastAngle** |

### Detonate

> void **Detonate**([LinearTransform](/vext/ref/shared/class/lineartransform) **transform**, [Vec3](/vext/ref/shared/class/vec3) **impactNormal**, [Vec3](/vext/ref/shared/class/vec3) **origin**, float **latency**, float **damageMultiplier**, [Vec3](/vext/ref/shared/class/vec3) **externalDamageDirection**, float **blastAngle**)

#### Parameters

| Name                    | Type                                                    | Description |
| ----------------------- | ------------------------------------------------------- | ----------- |
| transform               | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| impactNormal            | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| origin                  | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| latency                 | float                                                   |             |
| damageMultiplier        | float                                                   |             |
| externalDamageDirection | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| blastAngle              | float                                                   |             |
