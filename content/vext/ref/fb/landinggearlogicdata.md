---
title: LandingGearLogicData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[LandingGearLogicData](#constructor-0)**() |
| **[LandingGearLogicData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LandingGearLogicData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "retractCondition" >}} | [LandingGearConditionData](/vext/ref/fb/landinggearconditiondata) |
| {{< prop "deployCondition" >}} | [LandingGearConditionData](/vext/ref/fb/landinggearconditiondata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LandingGearLogicData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LandingGearLogicData {#constructor-0}

> **LandingGearLogicData**()

Creates a new [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata) frostbite instance.

### LandingGearLogicData {#constructor-1}

> **LandingGearLogicData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LandingGearLogicData {#constructor-2}

> **LandingGearLogicData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata). |

## Properties

### {{% prop-heading "retractCondition" %}}

> **[LandingGearConditionData](/vext/ref/fb/landinggearconditiondata)**

### {{% prop-heading "deployCondition" %}}

> **[LandingGearConditionData](/vext/ref/fb/landinggearconditiondata)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata) type.

