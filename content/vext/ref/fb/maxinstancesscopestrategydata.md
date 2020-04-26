---
title: MaxInstancesScopeStrategyData
---

Inherits from [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)

## Summary

### Constructors

|  |
| --- |
| **[MaxInstancesScopeStrategyData](#constructor-0)**() |
| **[MaxInstancesScopeStrategyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaxInstancesScopeStrategyData](#constructor-2)**(other: [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)) |
| **[MaxInstancesScopeStrategyData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "count" >}} | int |
| {{< prop "keepOldest" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaxInstancesScopeStrategyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaxInstancesScopeStrategyData {#constructor-0}

> **MaxInstancesScopeStrategyData**()

Creates a new [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata) frostbite instance.

### MaxInstancesScopeStrategyData {#constructor-1}

> **MaxInstancesScopeStrategyData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaxInstancesScopeStrategyData {#constructor-2}

> **MaxInstancesScopeStrategyData**(other: [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata))

Casts an instance of type [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata) to [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata) | The instance to cast to [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata). |

### MaxInstancesScopeStrategyData {#constructor-3}

> **MaxInstancesScopeStrategyData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata). |

## Properties

### {{% prop-heading "count" %}}

> **int**

### {{% prop-heading "keepOldest" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaxInstancesScopeStrategyData](/vext/ref/fb/maxinstancesscopestrategydata) type.

