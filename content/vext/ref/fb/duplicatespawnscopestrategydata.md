---
title: DuplicateSpawnScopeStrategyData
---

Inherits from [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)

## Summary

### Constructors

|  |
| --- |
| **[DuplicateSpawnScopeStrategyData](#constructor-0)**() |
| **[DuplicateSpawnScopeStrategyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DuplicateSpawnScopeStrategyData](#constructor-2)**(other: [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)) |
| **[DuplicateSpawnScopeStrategyData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "time" >}} | float |
| {{< prop "distance" >}} | float |
| {{< prop "closestCount" >}} | int |
| {{< prop "groupTypes" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DuplicateSpawnScopeStrategyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DuplicateSpawnScopeStrategyData {#constructor-0}

> **DuplicateSpawnScopeStrategyData**()

Creates a new [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata) frostbite instance.

### DuplicateSpawnScopeStrategyData {#constructor-1}

> **DuplicateSpawnScopeStrategyData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DuplicateSpawnScopeStrategyData {#constructor-2}

> **DuplicateSpawnScopeStrategyData**(other: [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata))

Casts an instance of type [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata) to [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata) | The instance to cast to [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata). |

### DuplicateSpawnScopeStrategyData {#constructor-3}

> **DuplicateSpawnScopeStrategyData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata). |

## Properties

### {{% prop-heading "time" %}}

> **float**

### {{% prop-heading "distance" %}}

> **float**

### {{% prop-heading "closestCount" %}}

> **int**

### {{% prop-heading "groupTypes" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DuplicateSpawnScopeStrategyData](/vext/ref/fb/duplicatespawnscopestrategydata) type.

