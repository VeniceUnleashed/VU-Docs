---
title: PersistenceRetentionPolicy
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[PersistenceRetentionPolicy](#constructor-0)**() |
| **[PersistenceRetentionPolicy](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PersistenceRetentionPolicy](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PersistenceRetentionPolicy](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dailyHistoryCount" >}} | int |
| {{< prop "weeklyHistoryCount" >}} | int |
| {{< prop "monthlyHistoryCount" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PersistenceRetentionPolicy" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PersistenceRetentionPolicy {#constructor-0}
> **PersistenceRetentionPolicy**()

Creates a new [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy) frostbite instance.

### PersistenceRetentionPolicy {#constructor-1}
> **PersistenceRetentionPolicy**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PersistenceRetentionPolicy {#constructor-2}
> **PersistenceRetentionPolicy**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy). |

### PersistenceRetentionPolicy {#constructor-3}
> **PersistenceRetentionPolicy**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy). |

## Properties
### {{% prop-heading "dailyHistoryCount" %}}
> **int**

### {{% prop-heading "weeklyHistoryCount" %}}
> **int**

### {{% prop-heading "monthlyHistoryCount" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy) type.

