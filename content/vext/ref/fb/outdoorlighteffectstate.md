---
title: OutdoorLightEffectState
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| OutdoorLightEffectState()                                                          | Create a new instance of this container type.                                                                                         |
| OutdoorLightEffectState(OutdoorLightEffectState other)                             | Create a reference copy of an instance of the same type.                                                                              |
| OutdoorLightEffectState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OutdoorLightEffectState](OutdoorLightEffectState). |

## Properties

| Name                 | Type                              | Description |
| -------------------- | --------------------------------- | ----------- |
| skyColor             | [Vec3](/vext/ref/shared/class/vec3) |             |
| groundColor          | [Vec3](/vext/ref/shared/class/vec3) |             |
| sunColor             | [Vec3](/vext/ref/shared/class/vec3) |             |
| cloudShadowSpeed     | [Vec2](/vext/ref/shared/class/vec2) |             |
| sunRotationX         | number                            |             |
| sunRotationY         | number                            |             |
| skyLightAngleFactor  | number                            |             |
| sunShadowHeightScale | number                            |             |
| cloudShadowTexture   | [TextureAsset](TextureAsset)      |             |
| cloudShadowSize      | number                            |             |
| cloudShadowExponent  | number                            |             |
| cloudShadowCoverage  | number                            |             |
| cloudShadowEnable    | bool                              |             |
| enable               | bool                              |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [OutdoorLightEffectState](OutdoorLightEffectState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OutdoorLightEffectState](OutdoorLightEffectState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
