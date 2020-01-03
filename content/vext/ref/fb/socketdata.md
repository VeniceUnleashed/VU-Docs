---
title: SocketData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SocketData()                                                          | Create a new instance of this container type.                                                               |
| SocketData(SocketData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| SocketData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SocketData](SocketData). |

## Properties

| Name                        | Type                                                    | Description |
| --------------------------- | ------------------------------------------------------- | ----------- |
| boneRigidTransform          | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| transform                   | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| unlockAsset                 | [UnlockAssetBase](UnlockAssetBase)                      |             |
| boneId                      | number                                                  |             |
| boneName                    | string                                                  |             |
| availableObjects            | [SocketObjectDataBase](SocketObjectDataBase)\[\]        |             |
| gearSlot                    | [GearSlot](GearSlot)                                    |             |
| socketType                  | [SocketType](SocketType)                                |             |
| usesDefaultObject           | bool                                                    |             |
| excluded                    | bool                                                    |             |
| defaultEnableSocketEntities | bool                                                    |             |
| forceSocketEntitiesEnabled  | bool                                                    |             |
| hideByZoomTransition        | bool                                                    |             |
| hideByLightToggle           | bool                                                    |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [SocketData](SocketData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SocketData](SocketData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
