---
title: VeniceRichPresenceLevelDescriptionComponent (Frostbite Container)
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                               | Description                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceRichPresenceLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                                                    |
| VeniceRichPresenceLevelDescriptionComponent(VeniceRichPresenceLevelDescriptionComponent other)            | Create a reference copy of an instance of the same type.                                                                                                                         |
| VeniceRichPresenceLevelDescriptionComponent([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [VeniceRichPresenceLevelDescriptionComponent](VeniceRichPresenceLevelDescriptionComponent). |
| VeniceRichPresenceLevelDescriptionComponent([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VeniceRichPresenceLevelDescriptionComponent](VeniceRichPresenceLevelDescriptionComponent).    |

## Properties

| Name          | Type                                                         | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| presenceMode  | [RichPresencePresenceString](RichPresencePresenceString)     |             |
| contextValues | [RichPresenceContextSetting](RichPresenceContextSetting)\[\] |             |

## Methods

| Type                                                                                       | Name            | Parameters                                     |
| ------------------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VeniceRichPresenceLevelDescriptionComponent](VeniceRichPresenceLevelDescriptionComponent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VeniceRichPresenceLevelDescriptionComponent](VeniceRichPresenceLevelDescriptionComponent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
