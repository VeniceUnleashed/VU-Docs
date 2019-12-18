---
title: MotionBlurComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| MotionBlurComponentData()                                                          | Create a new instance of this container type.                                                                                         |
| MotionBlurComponentData(MotionBlurComponentData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| MotionBlurComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [MotionBlurComponentData](MotionBlurComponentData).                      |
| MotionBlurComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MotionBlurComponentData](MotionBlurComponentData).                    |
| MotionBlurComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MotionBlurComponentData](MotionBlurComponentData).              |
| MotionBlurComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MotionBlurComponentData](MotionBlurComponentData). |

## Properties

| Name                   | Type           | Description |
| ---------------------- | -------------- | ----------- |
| realm                  | [Realm](Realm) |             |
| cutoffGradientScale    | number         |             |
| motionBlurCutoffRadius | number         |             |
| motionBlurEnable       | bool           |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MotionBlurComponentData](MotionBlurComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MotionBlurComponentData](MotionBlurComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
