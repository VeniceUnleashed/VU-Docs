---
title: DestructionControllerComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionControllerComponentData()                                                          | Create a new instance of this container type.                                                                                                               |
| DestructionControllerComponentData(DestructionControllerComponentData other)                  | Create a reference copy of an instance of the same type.                                                                                                    |
| DestructionControllerComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DestructionControllerComponentData](/vext/ref/fb/destructioncontrollercomponentdata/).                      |
| DestructionControllerComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DestructionControllerComponentData](/vext/ref/fb/destructioncontrollercomponentdata/).                    |
| DestructionControllerComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DestructionControllerComponentData](/vext/ref/fb/destructioncontrollercomponentdata/).              |
| DestructionControllerComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionControllerComponentData](/vext/ref/fb/destructioncontrollercomponentdata/). |

## Properties

| Name                  | Type                                   | Description |
| --------------------- | -------------------------------------- | ----------- |
| debrisClusters        | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)\[\] |             |
| attachToNearbyObjects | bool                                   |             |

## Methods

| Type                                                                     | Name            | Parameters                                     |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionControllerComponentData](/vext/ref/fb/destructioncontrollercomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionControllerComponentData](/vext/ref/fb/destructioncontrollercomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
