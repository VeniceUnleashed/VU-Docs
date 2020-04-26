---
title: PersistenceData
---

Inherits from 
[AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata)

## Summary
### Constructors
| |
| ----------- |
| **[PersistenceData](#constructor-0)**() |
| **[PersistenceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PersistenceData](#constructor-2)**(other: [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata)) |
| **[PersistenceData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PersistenceData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "persistenceName" >}} | string |
| {{< prop "clubPersistenceName" >}} | string |
| {{< prop "clientDefaultGroup" >}} | [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup) \| nil |
| {{< prop "values" >}} | [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata)[] |
| {{< prop "customReportValues" >}} | [CustomReportValueData](/vext/ref/fb/customreportvaluedata)[] |
| {{< prop "serverDefaultGroup" >}} | [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup) \| nil |
| {{< prop "retentionPolicy" >}} | [PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy) \| nil |
| {{< prop "consumableMappings" >}} | [PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping)[] |
| {{< prop "historyDaily" >}} | bool |
| {{< prop "historyWeekly" >}} | bool |
| {{< prop "historyMonthly" >}} | bool |
| {{< prop "outputProperties" >}} | bool |
| {{< prop "deltaGameReports" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PersistenceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PersistenceData {#constructor-0}
> **PersistenceData**()

Creates a new [PersistenceData](/vext/ref/fb/persistencedata) frostbite instance.

### PersistenceData {#constructor-1}
> **PersistenceData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PersistenceData](/vext/ref/fb/persistencedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PersistenceData {#constructor-2}
> **PersistenceData**(other: [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata))

Casts an instance of type [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata) to [PersistenceData](/vext/ref/fb/persistencedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata) | The instance to cast to [PersistenceData](/vext/ref/fb/persistencedata). |

### PersistenceData {#constructor-3}
> **PersistenceData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PersistenceData](/vext/ref/fb/persistencedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PersistenceData](/vext/ref/fb/persistencedata). |

### PersistenceData {#constructor-4}
> **PersistenceData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceData](/vext/ref/fb/persistencedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PersistenceData](/vext/ref/fb/persistencedata). |

## Properties
### {{% prop-heading "persistenceName" %}}
> **string**

### {{% prop-heading "clubPersistenceName" %}}
> **string**

### {{% prop-heading "clientDefaultGroup" %}}
> **[PersistenceStatGroup](/vext/ref/fb/persistencestatgroup)** | **nil**

### {{% prop-heading "values" %}}
> **[PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata)**[]

### {{% prop-heading "customReportValues" %}}
> **[CustomReportValueData](/vext/ref/fb/customreportvaluedata)**[]

### {{% prop-heading "serverDefaultGroup" %}}
> **[PersistenceStatGroup](/vext/ref/fb/persistencestatgroup)** | **nil**

### {{% prop-heading "retentionPolicy" %}}
> **[PersistenceRetentionPolicy](/vext/ref/fb/persistenceretentionpolicy)** | **nil**

### {{% prop-heading "consumableMappings" %}}
> **[PersistenceConsumableMapping](/vext/ref/fb/persistenceconsumablemapping)**[]

### {{% prop-heading "historyDaily" %}}
> **bool**

### {{% prop-heading "historyWeekly" %}}
> **bool**

### {{% prop-heading "historyMonthly" %}}
> **bool**

### {{% prop-heading "outputProperties" %}}
> **bool**

### {{% prop-heading "deltaGameReports" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PersistenceData](/vext/ref/fb/persistencedata) type.

