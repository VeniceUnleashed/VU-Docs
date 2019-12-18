---
title: SocketObjectData (Frostbite Container)
---
### Base Classes

[SocketObjectDataBase](SocketObjectDataBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SocketObjectData()                                                          | Create a new instance of this container type.                                                                           |
| SocketObjectData(SocketObjectData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SocketObjectData([SocketObjectDataBase](SocketObjectDataBase) other)        | Upcast an instance of type [SocketObjectDataBase](SocketObjectDataBase) to [SocketObjectData](SocketObjectData).        |
| SocketObjectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SocketObjectData](SocketObjectData). |

## Properties

| Name                 | Type                                                 | Description |
| -------------------- | ---------------------------------------------------- | ----------- |
| asset1pGuid          | [Guid](/vext/ref/cls/shr/Guid)                    |             |
| variation1pGuids     | [Guid](/vext/ref/cls/shr/Guid)\[\]                |             |
| asset1pZoomGuid      | [Guid](/vext/ref/cls/shr/Guid)                    |             |
| variation1pZoomGuids | [Guid](/vext/ref/cls/shr/Guid)\[\]                |             |
| asset3pGuid          | [Guid](/vext/ref/cls/shr/Guid)                    |             |
| variation3pGuids     | [Guid](/vext/ref/cls/shr/Guid)\[\]                |             |
| customizedMaterials  | [CustomizedMaterialData](CustomizedMaterialData)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SocketObjectData](SocketObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SocketObjectData](SocketObjectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
