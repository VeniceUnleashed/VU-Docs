---
title: AIEntryData
---

Inherits from [GameAIEntryData](/vext/ref/fb/gameaientrydata)

## Summary

### Constructors

|  |
| --- |
| **[AIEntryData](#constructor-0)**() |
| **[AIEntryData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AIEntryData](#constructor-2)**(other: [GameAIEntryData](/vext/ref/fb/gameaientrydata)) |
| **[AIEntryData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AIEntryData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "equipmentType" >}} | [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata) \| nil |
| {{< prop "armament" >}} | [ArmamentData](/vext/ref/fb/armamentdata) \| nil |
| {{< prop "mobility" >}} | [MobilityData](/vext/ref/fb/mobilitydata) \| nil |
| {{< prop "strengthType" >}} | [StrengthType](/vext/ref/fb/strengthtype) |
| {{< prop "reuseTime" >}} | float |
| {{< prop "forbidden" >}} | bool |
| {{< prop "hasExposedSoldier" >}} | bool |
| {{< prop "interludeOnly" >}} | bool |
| {{< prop "invalidForAI" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AIEntryData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AIEntryData {#constructor-0}

> **AIEntryData**()

Creates a new [AIEntryData](/vext/ref/fb/aientrydata) frostbite instance.

### AIEntryData {#constructor-1}

> **AIEntryData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AIEntryData](/vext/ref/fb/aientrydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AIEntryData {#constructor-2}

> **AIEntryData**(other: [GameAIEntryData](/vext/ref/fb/gameaientrydata))

Casts an instance of type [GameAIEntryData](/vext/ref/fb/gameaientrydata) to [AIEntryData](/vext/ref/fb/aientrydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameAIEntryData](/vext/ref/fb/gameaientrydata) | The instance to cast to [AIEntryData](/vext/ref/fb/aientrydata). |

### AIEntryData {#constructor-3}

> **AIEntryData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AIEntryData](/vext/ref/fb/aientrydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AIEntryData](/vext/ref/fb/aientrydata). |

### AIEntryData {#constructor-4}

> **AIEntryData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AIEntryData](/vext/ref/fb/aientrydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AIEntryData](/vext/ref/fb/aientrydata). |

## Properties

### {{% prop-heading "equipmentType" %}}

> **[AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata)** \| **nil**

### {{% prop-heading "armament" %}}

> **[ArmamentData](/vext/ref/fb/armamentdata)** \| **nil**

### {{% prop-heading "mobility" %}}

> **[MobilityData](/vext/ref/fb/mobilitydata)** \| **nil**

### {{% prop-heading "strengthType" %}}

> **[StrengthType](/vext/ref/fb/strengthtype)**

### {{% prop-heading "reuseTime" %}}

> **float**

### {{% prop-heading "forbidden" %}}

> **bool**

### {{% prop-heading "hasExposedSoldier" %}}

> **bool**

### {{% prop-heading "interludeOnly" %}}

> **bool**

### {{% prop-heading "invalidForAI" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AIEntryData](/vext/ref/fb/aientrydata) type.

