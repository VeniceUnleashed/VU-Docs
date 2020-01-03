---
title: PitchModifier
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| PitchModifier()                    | Create a new instance of this structure type.            |
| PitchModifier(PitchModifier other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                              | Description |
| ---------- | --------------------------------- | ----------- |
| offset     | [Vec3](/vext/ref/shared/class/vec3) |             |
| pitchVal   | number                            |             |
| pitchAngle | number                            |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [PitchModifier](/vext/ref/fb/pitchmodifier/) | [Clone](#clone) |            |

### Clone

> [PitchModifier](/vext/ref/fb/pitchmodifier/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
