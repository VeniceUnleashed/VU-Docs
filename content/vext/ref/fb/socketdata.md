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
| SocketData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SocketData](/vext/ref/fb/socketdata/). |

## Properties

| Name                        | Type                                                    | Description |
| --------------------------- | ------------------------------------------------------- | ----------- |
| boneRigidTransform          | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| transform                   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| unlockAsset                 | [UnlockAssetBase](/vext/ref/fb/unlockassetbase/)                      |             |
| boneId                      | number                                                  |             |
| boneName                    | string                                                  |             |
| availableObjects            | [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/)\[\]        |             |
| gearSlot                    | [GearSlot](/vext/ref/fb/gearslot/)                                    |             |
| socketType                  | [SocketType](/vext/ref/fb/sockettype/)                                |             |
| usesDefaultObject           | bool                                                    |             |
| excluded                    | bool                                                    |             |
| defaultEnableSocketEntities | bool                                                    |             |
| forceSocketEntitiesEnabled  | bool                                                    |             |
| hideByZoomTransition        | bool                                                    |             |
| hideByLightToggle           | bool                                                    |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [SocketData](/vext/ref/fb/socketdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SocketData](/vext/ref/fb/socketdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
