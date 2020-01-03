---
title: RemoteEntryComponentData
---
### Base Classes

[EntryComponentData](/vext/ref/fb/entrycomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| RemoteEntryComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| RemoteEntryComponentData(RemoteEntryComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| RemoteEntryComponentData([EntryComponentData](/vext/ref/fb/entrycomponentdata/) other)            | Upcast an instance of type [EntryComponentData](/vext/ref/fb/entrycomponentdata/) to [RemoteEntryComponentData](/vext/ref/fb/remoteentrycomponentdata/).            |
| RemoteEntryComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [RemoteEntryComponentData](/vext/ref/fb/remoteentrycomponentdata/).                      |
| RemoteEntryComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RemoteEntryComponentData](/vext/ref/fb/remoteentrycomponentdata/).                    |
| RemoteEntryComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RemoteEntryComponentData](/vext/ref/fb/remoteentrycomponentdata/).              |
| RemoteEntryComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RemoteEntryComponentData](/vext/ref/fb/remoteentrycomponentdata/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RemoteEntryComponentData](/vext/ref/fb/remoteentrycomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RemoteEntryComponentData](/vext/ref/fb/remoteentrycomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
