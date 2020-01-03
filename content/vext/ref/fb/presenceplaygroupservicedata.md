---
title: PresencePlaygroupServiceData
---
### Base Classes

[PresenceServiceData](/vext/ref/fb/presenceservicedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| PresencePlaygroupServiceData()                                                          | Create a new instance of this container type.                                                                                                   |
| PresencePlaygroupServiceData(PresencePlaygroupServiceData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| PresencePlaygroupServiceData([PresenceServiceData](/vext/ref/fb/presenceservicedata/) other)          | Upcast an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata/) to [PresencePlaygroupServiceData](/vext/ref/fb/presenceplaygroupservicedata/).          |
| PresencePlaygroupServiceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PresencePlaygroupServiceData](/vext/ref/fb/presenceplaygroupservicedata/).                                      |
| PresencePlaygroupServiceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresencePlaygroupServiceData](/vext/ref/fb/presenceplaygroupservicedata/). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresencePlaygroupServiceData](/vext/ref/fb/presenceplaygroupservicedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PresencePlaygroupServiceData](/vext/ref/fb/presenceplaygroupservicedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
