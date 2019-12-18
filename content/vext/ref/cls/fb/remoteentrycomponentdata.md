---
title: RemoteEntryComponentData (Frostbite Container)
---
### Base Classes

[EntryComponentData](EntryComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| RemoteEntryComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| RemoteEntryComponentData(RemoteEntryComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| RemoteEntryComponentData([EntryComponentData](EntryComponentData) other)            | Upcast an instance of type [EntryComponentData](EntryComponentData) to [RemoteEntryComponentData](RemoteEntryComponentData).            |
| RemoteEntryComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [RemoteEntryComponentData](RemoteEntryComponentData).                      |
| RemoteEntryComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RemoteEntryComponentData](RemoteEntryComponentData).                    |
| RemoteEntryComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RemoteEntryComponentData](RemoteEntryComponentData).              |
| RemoteEntryComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RemoteEntryComponentData](RemoteEntryComponentData). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RemoteEntryComponentData](RemoteEntryComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RemoteEntryComponentData](RemoteEntryComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
