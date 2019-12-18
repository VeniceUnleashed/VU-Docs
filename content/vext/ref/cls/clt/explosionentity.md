---
title: ExplosionEntity (Client Class)
---
### Base Classes

[SpatialEntity](/vext/ref/cls/shr/spatialentity)

## Description

## Constructors

| Constructor                                                                                            | Description |
| ------------------------------------------------------------------------------------------------------ | ----------- |
| [ExplosionEntity](/vext/ref/cls/clt/explosionentity)([Entity](/vext/ref/cls/shr/entity) **ref**) |             |

## Static Members

| Type                                                    | Name                     | Description |
| ------------------------------------------------------- | ------------------------ | ----------- |
| [TypeInformation](/vext/ref/cls/shr/typeinformation) | ExplosionEntity.typeInfo |             |

## Methods

| Type | Name                  | Parameters                                                                                                                                                                                                     |
| ---- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void | [Detonate](#detonate) | [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, [Vec3](/vext/ref/cls/shr/vec3) **impactNormal**, float **damageMultiplier**, [Player](/vext/ref/cls/clt/player) **shooterPlayer** |

### Detonate

> void **Detonate**([LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, [Vec3](/vext/ref/cls/shr/vec3) **impactNormal**, float **damageMultiplier**, [Player](/vext/ref/cls/clt/player) **shooterPlayer**)

#### Parameters

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| transform        | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |
| impactNormal     | [Vec3](/vext/ref/cls/shr/vec3)                       |             |
| damageMultiplier | float                                                   |             |
| shooterPlayer    | [Player](/vext/ref/cls/clt/player)                   |             |
