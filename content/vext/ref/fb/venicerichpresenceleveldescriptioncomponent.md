---
title: VeniceRichPresenceLevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                               | Description                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceRichPresenceLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                                    |
| VeniceRichPresenceLevelDescriptionComponent(VeniceRichPresenceLevelDescriptionComponent other)            | Create a reference copy of an instance of the same type.                                                                                                                         |
| VeniceRichPresenceLevelDescriptionComponent([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [VeniceRichPresenceLevelDescriptionComponent](/vext/ref/fb/venicerichpresenceleveldescriptioncomponent/). |
| VeniceRichPresenceLevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceRichPresenceLevelDescriptionComponent](/vext/ref/fb/venicerichpresenceleveldescriptioncomponent/).    |

## Properties

| Name          | Type                                                         | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| presenceMode  | [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring/)     |             |
| contextValues | [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting/)\[\] |             |

## Methods

| Type                                                                                       | Name            | Parameters                                     |
| ------------------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceRichPresenceLevelDescriptionComponent](/vext/ref/fb/venicerichpresenceleveldescriptioncomponent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceRichPresenceLevelDescriptionComponent](/vext/ref/fb/venicerichpresenceleveldescriptioncomponent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
