---
title: SoundScopeData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoundScopeData](#constructor-0)**() |
| **[SoundScopeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundScopeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "defaultStrategy" >}} | [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundScopeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundScopeData {#constructor-0}

> **SoundScopeData**()

Creates a new [SoundScopeData](/vext/ref/fb/soundscopedata) frostbite instance.

### SoundScopeData {#constructor-1}

> **SoundScopeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundScopeData](/vext/ref/fb/soundscopedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundScopeData {#constructor-2}

> **SoundScopeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundScopeData](/vext/ref/fb/soundscopedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundScopeData](/vext/ref/fb/soundscopedata). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "defaultStrategy" %}}

> **[SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundScopeData](/vext/ref/fb/soundscopedata) type.

