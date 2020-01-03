---
title: SocketObjectData
---
### Base Classes

[SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SocketObjectData()                                                          | Create a new instance of this container type.                                                                           |
| SocketObjectData(SocketObjectData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SocketObjectData([SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) other)        | Upcast an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) to [SocketObjectData](/vext/ref/fb/socketobjectdata/).        |
| SocketObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SocketObjectData](/vext/ref/fb/socketobjectdata/). |

## Properties

| Name                 | Type                                                 | Description |
| -------------------- | ---------------------------------------------------- | ----------- |
| asset1pGuid          | [Guid](/vext/ref/shared/class/guid)                    |             |
| variation1pGuids     | [Guid](/vext/ref/shared/class/guid)\[\]                |             |
| asset1pZoomGuid      | [Guid](/vext/ref/shared/class/guid)                    |             |
| variation1pZoomGuids | [Guid](/vext/ref/shared/class/guid)\[\]                |             |
| asset3pGuid          | [Guid](/vext/ref/shared/class/guid)                    |             |
| variation3pGuids     | [Guid](/vext/ref/shared/class/guid)\[\]                |             |
| customizedMaterials  | [CustomizedMaterialData](/vext/ref/fb/customizedmaterialdata/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SocketObjectData](/vext/ref/fb/socketobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SocketObjectData](/vext/ref/fb/socketobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
