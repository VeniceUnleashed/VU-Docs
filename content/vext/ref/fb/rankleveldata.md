---
title: RankLevelData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[RankLevelData](#constructor-0)**() |
| **[RankLevelData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RankLevelData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rankName" >}} | string |
| {{< prop "pointsNeeded" >}} | int |
| {{< prop "imageName" >}} | string |
| {{< prop "iconName" >}} | string |
| {{< prop "soundName" >}} | string |
| {{< prop "unlockInfos" >}} | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)[] |
| {{< prop "rankNumber" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RankLevelData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RankLevelData {#constructor-0}

> **RankLevelData**()

Creates a new [RankLevelData](/vext/ref/fb/rankleveldata) frostbite instance.

### RankLevelData {#constructor-1}

> **RankLevelData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RankLevelData](/vext/ref/fb/rankleveldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RankLevelData {#constructor-2}

> **RankLevelData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RankLevelData](/vext/ref/fb/rankleveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RankLevelData](/vext/ref/fb/rankleveldata). |

## Properties

### {{% prop-heading "rankName" %}}

> **string**

### {{% prop-heading "pointsNeeded" %}}

> **int**

### {{% prop-heading "imageName" %}}

> **string**

### {{% prop-heading "iconName" %}}

> **string**

### {{% prop-heading "soundName" %}}

> **string**

### {{% prop-heading "unlockInfos" %}}

> **[BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)**[]

### {{% prop-heading "rankNumber" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RankLevelData](/vext/ref/fb/rankleveldata) type.

