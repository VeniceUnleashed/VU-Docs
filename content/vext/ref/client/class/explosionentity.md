---
title: ExplosionEntity
---
### Base Classes

[SpatialEntity](/vext/ref/shared/class/spatialentity)

## Description

## Constructors

| Constructor                                                                                            | Description |
| ------------------------------------------------------------------------------------------------------ | ----------- |
| [ExplosionEntity](/vext/ref/cls/clt/explosionentity)([Entity](/vext/ref/shared/class/entity) **ref**) |             |

## Static Members

| Type                                                    | Name                     | Description |
| ------------------------------------------------------- | ------------------------ | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | ExplosionEntity.typeInfo |             |

## Methods

| Type | Name                  | Parameters                                                                                                                                                                                                     |
| ---- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| void | [Detonate](#detonate) | [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**, [Vec3](/vext/ref/shared/class/vec3) **impactNormal**, float **damageMultiplier**, [Player](/vext/ref/cls/clt/player) **shooterPlayer** |

### Detonate

> void **Detonate**([LinearTransform](/vext/ref/shared/class/lineartransform) **transform**, [Vec3](/vext/ref/shared/class/vec3) **impactNormal**, float **damageMultiplier**, [Player](/vext/ref/cls/clt/player) **shooterPlayer**)

#### Parameters

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| transform        | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| impactNormal     | [Vec3](/vext/ref/shared/class/vec3)                       |             |
| damageMultiplier | float                                                   |             |
| shooterPlayer    | [Player](/vext/ref/cls/clt/player)                   |             |
