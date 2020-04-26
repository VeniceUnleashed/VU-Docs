---
title: SoundTestTransformTask
---

Inherits from [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec)

## Summary

### Constructors

|  |
| --- |
| **[SoundTestTransformTask](#constructor-0)**() |
| **[SoundTestTransformTask](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundTestTransformTask](#constructor-2)**(other: [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec)) |
| **[SoundTestTransformTask](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "initialPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "behavior" >}} | [SoundTestTransformBehavior](/vext/ref/fb/soundtesttransformbehavior) |
| {{< prop "relativeListener" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundTestTransformTask" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundTestTransformTask {#constructor-0}

> **SoundTestTransformTask**()

Creates a new [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask) frostbite instance.

### SoundTestTransformTask {#constructor-1}

> **SoundTestTransformTask**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundTestTransformTask {#constructor-2}

> **SoundTestTransformTask**(other: [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec))

Casts an instance of type [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec) to [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec) | The instance to cast to [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask). |

### SoundTestTransformTask {#constructor-3}

> **SoundTestTransformTask**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask). |

## Properties

### {{% prop-heading "initialPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "behavior" %}}

> **[SoundTestTransformBehavior](/vext/ref/fb/soundtesttransformbehavior)**

### {{% prop-heading "relativeListener" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask) type.

