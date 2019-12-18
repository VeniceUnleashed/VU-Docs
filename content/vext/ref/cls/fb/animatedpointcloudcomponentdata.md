---
title: AnimatedPointCloudComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedPointCloudComponentData()                                                          | Create a new instance of this container type.                                                                                                         |
| AnimatedPointCloudComponentData(AnimatedPointCloudComponentData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| AnimatedPointCloudComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [AnimatedPointCloudComponentData](AnimatedPointCloudComponentData).                      |
| AnimatedPointCloudComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AnimatedPointCloudComponentData](AnimatedPointCloudComponentData).                    |
| AnimatedPointCloudComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AnimatedPointCloudComponentData](AnimatedPointCloudComponentData).              |
| AnimatedPointCloudComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AnimatedPointCloudComponentData](AnimatedPointCloudComponentData). |

## Properties

| Name         | Type                                               | Description |
| ------------ | -------------------------------------------------- | ----------- |
| pointCloud   | [AnimatedPointCloudAsset](AnimatedPointCloudAsset) |             |
| externalTime | number                                             |             |
| startPaused  | bool                                               |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimatedPointCloudComponentData](AnimatedPointCloudComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AnimatedPointCloudComponentData](AnimatedPointCloudComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
