---
title: PlayerEntryComponentData
---
### Base Classes

[EntryComponentData](EntryComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PlayerEntryComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| PlayerEntryComponentData(PlayerEntryComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PlayerEntryComponentData([EntryComponentData](EntryComponentData) other)            | Upcast an instance of type [EntryComponentData](EntryComponentData) to [PlayerEntryComponentData](PlayerEntryComponentData).            |
| PlayerEntryComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [PlayerEntryComponentData](PlayerEntryComponentData).                      |
| PlayerEntryComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PlayerEntryComponentData](PlayerEntryComponentData).                    |
| PlayerEntryComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PlayerEntryComponentData](PlayerEntryComponentData).              |
| PlayerEntryComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerEntryComponentData](PlayerEntryComponentData). |

## Properties

| Name                            | Type                              | Description |
| ------------------------------- | --------------------------------- | ----------- |
| animationAccelerationMultiplier | [Vec3](/vext/ref/shared/class/vec3) |             |
| antEntryId                      | [AntEntryIdEnum](AntEntryIdEnum)  |             |
| antEntryID                      | string                            |             |
| antEntryEnumeration             | [AntEnumeration](AntEnumeration)  |             |
| shieldedTransitionExitTime      | number                            |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PlayerEntryComponentData](PlayerEntryComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerEntryComponentData](PlayerEntryComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
