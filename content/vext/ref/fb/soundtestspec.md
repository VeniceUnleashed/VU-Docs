---
title: SoundTestSpec
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoundTestSpec](#constructor-0)**() |
| **[SoundTestSpec](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundTestSpec](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "mainStartTask" >}} | [SoundTestTask](/vext/ref/fb/soundtesttask) \| nil |
| {{< prop "mainStopTask" >}} | [SoundTestTask](/vext/ref/fb/soundtesttask) \| nil |
| {{< prop "duration" >}} | float |
| {{< prop "tasks" >}} | [SoundTestTask](/vext/ref/fb/soundtesttask)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundTestSpec" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundTestSpec {#constructor-0}

> **SoundTestSpec**()

Creates a new [SoundTestSpec](/vext/ref/fb/soundtestspec) frostbite instance.

### SoundTestSpec {#constructor-1}

> **SoundTestSpec**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundTestSpec](/vext/ref/fb/soundtestspec) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundTestSpec {#constructor-2}

> **SoundTestSpec**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundTestSpec](/vext/ref/fb/soundtestspec). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundTestSpec](/vext/ref/fb/soundtestspec). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "description" %}}

> **string**

### {{% prop-heading "mainStartTask" %}}

> **[SoundTestTask](/vext/ref/fb/soundtesttask)** \| **nil**

### {{% prop-heading "mainStopTask" %}}

> **[SoundTestTask](/vext/ref/fb/soundtesttask)** \| **nil**

### {{% prop-heading "duration" %}}

> **float**

### {{% prop-heading "tasks" %}}

> **[SoundTestTask](/vext/ref/fb/soundtesttask)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundTestSpec](/vext/ref/fb/soundtestspec) type.

