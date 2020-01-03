---
title: SoldierEmoteNetworkedMessageMapping
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierEmoteNetworkedMessageMapping()                                                          | Create a new instance of this container type.                                                                                                                 |
| SoldierEmoteNetworkedMessageMapping(SoldierEmoteNetworkedMessageMapping other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| SoldierEmoteNetworkedMessageMapping([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping/). |

## Properties

| Name     | Type                               | Description |
| -------- | ---------------------------------- | ----------- |
| emote    | [SoldierEmote](/vext/ref/fb/soldieremote/)       |             |
| messages | [UIMessageType](/vext/ref/fb/uimessagetype/)\[\] |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierEmoteNetworkedMessageMapping](/vext/ref/fb/soldieremotenetworkedmessagemapping/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
