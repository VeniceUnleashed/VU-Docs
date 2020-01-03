---
title: ServerBackendData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ServerBackendData()                                                          | Create a new instance of this container type.                                                                             |
| ServerBackendData(ServerBackendData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| ServerBackendData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ServerBackendData](/vext/ref/fb/serverbackenddata/).                                      |
| ServerBackendData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ServerBackendData](/vext/ref/fb/serverbackenddata/). |

## Properties

| Name     | Type                                                               | Description |
| -------- | ------------------------------------------------------------------ | ----------- |
| mappings | [ServerBackendAttributeMapping](/vext/ref/fb/serverbackendattributemapping/)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [ServerBackendData](/vext/ref/fb/serverbackenddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ServerBackendData](/vext/ref/fb/serverbackenddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
