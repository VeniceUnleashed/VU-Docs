---
title: SoundTestTaskSpec
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoundTestTaskSpec](#constructor-0)**() |
| **[SoundTestTaskSpec](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundTestTaskSpec](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "description" >}} | string |
| {{< prop "duration" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundTestTaskSpec" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundTestTaskSpec {#constructor-0}

> **SoundTestTaskSpec**()

Creates a new [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec) frostbite instance.

### SoundTestTaskSpec {#constructor-1}

> **SoundTestTaskSpec**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundTestTaskSpec {#constructor-2}

> **SoundTestTaskSpec**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec). |

## Properties

### {{% prop-heading "description" %}}

> **string**

### {{% prop-heading "duration" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec) type.

