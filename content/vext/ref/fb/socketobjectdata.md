---
title: SocketObjectData
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
| SocketObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SocketObjectData](SocketObjectData). |

## Properties

| Name                 | Type                                                 | Description |
| -------------------- | ---------------------------------------------------- | ----------- |
| asset1pGuid          | [Guid](/vext/ref/shared/class/Guid)                    |             |
| variation1pGuids     | [Guid](/vext/ref/shared/class/Guid)\[\]                |             |
| asset1pZoomGuid      | [Guid](/vext/ref/shared/class/Guid)                    |             |
| variation1pZoomGuids | [Guid](/vext/ref/shared/class/Guid)\[\]                |             |
| asset3pGuid          | [Guid](/vext/ref/shared/class/Guid)                    |             |
| variation3pGuids     | [Guid](/vext/ref/shared/class/Guid)\[\]                |             |
| customizedMaterials  | [CustomizedMaterialData](CustomizedMaterialData)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SocketObjectData](SocketObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SocketObjectData](SocketObjectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
