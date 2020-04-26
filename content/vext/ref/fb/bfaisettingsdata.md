---
title: BFAISettingsData
---

Inherits from [AISettingsData](/vext/ref/fb/aisettingsdata)

## Summary

### Constructors

|  |
| --- |
| **[BFAISettingsData](#constructor-0)**() |
| **[BFAISettingsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BFAISettingsData](#constructor-2)**(other: [AISettingsData](/vext/ref/fb/aisettingsdata)) |
| **[BFAISettingsData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[BFAISettingsData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "movementConstants" >}} | [MovementConstantData](/vext/ref/fb/movementconstantdata) \| nil |
| {{< prop "turretControlConstants" >}} | [TurretControlConstantData](/vext/ref/fb/turretcontrolconstantdata) \| nil |
| {{< prop "searchAndDestroyConstants" >}} | [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata) \| nil |
| {{< prop "followConstants" >}} | [FollowConstantData](/vext/ref/fb/followconstantdata) \| nil |
| {{< prop "combatConstants" >}} | [CombatConstantData](/vext/ref/fb/combatconstantdata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BFAISettingsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BFAISettingsData {#constructor-0}

> **BFAISettingsData**()

Creates a new [BFAISettingsData](/vext/ref/fb/bfaisettingsdata) frostbite instance.

### BFAISettingsData {#constructor-1}

> **BFAISettingsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BFAISettingsData](/vext/ref/fb/bfaisettingsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BFAISettingsData {#constructor-2}

> **BFAISettingsData**(other: [AISettingsData](/vext/ref/fb/aisettingsdata))

Casts an instance of type [AISettingsData](/vext/ref/fb/aisettingsdata) to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AISettingsData](/vext/ref/fb/aisettingsdata) | The instance to cast to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata). |

### BFAISettingsData {#constructor-3}

> **BFAISettingsData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata). |

### BFAISettingsData {#constructor-4}

> **BFAISettingsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata). |

## Properties

### {{% prop-heading "movementConstants" %}}

> **[MovementConstantData](/vext/ref/fb/movementconstantdata)** \| **nil**

### {{% prop-heading "turretControlConstants" %}}

> **[TurretControlConstantData](/vext/ref/fb/turretcontrolconstantdata)** \| **nil**

### {{% prop-heading "searchAndDestroyConstants" %}}

> **[SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata)** \| **nil**

### {{% prop-heading "followConstants" %}}

> **[FollowConstantData](/vext/ref/fb/followconstantdata)** \| **nil**

### {{% prop-heading "combatConstants" %}}

> **[CombatConstantData](/vext/ref/fb/combatconstantdata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BFAISettingsData](/vext/ref/fb/bfaisettingsdata) type.

