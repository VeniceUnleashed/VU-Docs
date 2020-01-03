---
title: DofComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| DofComponentData()                                                          | Create a new instance of this container type.                                                                           |
| DofComponentData(DofComponentData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| DofComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DofComponentData](/vext/ref/fb/dofcomponentdata/).                      |
| DofComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DofComponentData](/vext/ref/fb/dofcomponentdata/).                    |
| DofComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DofComponentData](/vext/ref/fb/dofcomponentdata/).              |
| DofComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DofComponentData](/vext/ref/fb/dofcomponentdata/). |

## Properties

| Name                    | Type                     | Description |
| ----------------------- | ------------------------ | ----------- |
| realm                   | [Realm](/vext/ref/fb/realm/)           |             |
| nearDistanceScale       | number                   |             |
| focusDistance           | number                   |             |
| blurFilter              | [BlurFilter](/vext/ref/fb/blurfilter/) |             |
| blurFilterDeviation     | number                   |             |
| farDistanceScale        | number                   |             |
| blurAdd                 | number                   |             |
| scale                   | number                   |             |
| diffusionDofFocalLength | number                   |             |
| diffusionDofAperture    | number                   |             |
| diffusionDofEnable      | bool                     |             |
| enable                  | bool                     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [DofComponentData](/vext/ref/fb/dofcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DofComponentData](/vext/ref/fb/dofcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
