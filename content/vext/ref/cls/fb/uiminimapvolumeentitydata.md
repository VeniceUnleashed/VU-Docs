---
title: UIMinimapVolumeEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UIMinimapVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| UIMinimapVolumeEntityData(UIMinimapVolumeEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UIMinimapVolumeEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [UIMinimapVolumeEntityData](UIMinimapVolumeEntityData).                    |
| UIMinimapVolumeEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [UIMinimapVolumeEntityData](UIMinimapVolumeEntityData).              |
| UIMinimapVolumeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [UIMinimapVolumeEntityData](UIMinimapVolumeEntityData).                            |
| UIMinimapVolumeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [UIMinimapVolumeEntityData](UIMinimapVolumeEntityData).                    |
| UIMinimapVolumeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [UIMinimapVolumeEntityData](UIMinimapVolumeEntityData).              |
| UIMinimapVolumeEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIMinimapVolumeEntityData](UIMinimapVolumeEntityData). |

## Properties

| Name      | Type           | Description |
| --------- | -------------- | ----------- |
| asset     | [Asset](Asset) |             |
| isDefault | bool           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIMinimapVolumeEntityData](UIMinimapVolumeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIMinimapVolumeEntityData](UIMinimapVolumeEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
