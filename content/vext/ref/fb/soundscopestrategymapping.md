---
title: SoundScopeStrategyMapping
---

## Summary

### Constructors

|  |
| --- |
| **[SoundScopeStrategyMapping](#constructor-0)**() |
| **[SoundScopeStrategyMapping](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "scope" >}} | [SoundScopeData](/vext/ref/fb/soundscopedata) \| nil |
| {{< prop "strategy" >}} | [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundScopeStrategyMapping](/vext/ref/fb/soundscopestrategymapping) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundScopeStrategyMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundScopeStrategyMapping {#constructor-0}

> **SoundScopeStrategyMapping**()

Creates a new [SoundScopeStrategyMapping](/vext/ref/fb/soundscopestrategymapping) frostbite instance.

### SoundScopeStrategyMapping {#constructor-1}

> **SoundScopeStrategyMapping**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundScopeStrategyMapping](/vext/ref/fb/soundscopestrategymapping) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "scope" %}}

> **[SoundScopeData](/vext/ref/fb/soundscopedata)** \| **nil**

### {{% prop-heading "strategy" %}}

> **[SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [SoundScopeStrategyMapping](/vext/ref/fb/soundscopestrategymapping)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundScopeStrategyMapping](/vext/ref/fb/soundscopestrategymapping)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundScopeStrategyMapping](/vext/ref/fb/soundscopestrategymapping) type.

