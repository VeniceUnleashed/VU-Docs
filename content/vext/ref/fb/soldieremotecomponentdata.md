---
title: SoldierEmoteComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierEmoteComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierEmoteComponentData(SoldierEmoteComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierEmoteComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierEmoteComponentData](/vext/ref/fb/soldieremotecomponentdata/).                      |
| SoldierEmoteComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierEmoteComponentData](/vext/ref/fb/soldieremotecomponentdata/).                    |
| SoldierEmoteComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierEmoteComponentData](/vext/ref/fb/soldieremotecomponentdata/).              |
| SoldierEmoteComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierEmoteComponentData](/vext/ref/fb/soldieremotecomponentdata/). |

## Properties

| Name                     | Type                                                                           | Description |
| ------------------------ | ------------------------------------------------------------------------------ | ----------- |
| binding                  | [SoldierEmoteBinding](/vext/ref/fb/soldieremotebinding/)                                     |             |
| networkedMessageMappings | [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping/)\[\] |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierEmoteComponentData](/vext/ref/fb/soldieremotecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierEmoteComponentData](/vext/ref/fb/soldieremotecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
