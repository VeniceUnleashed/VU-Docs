---
title: PersistentValueTemplate
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[PersistentValueTemplate](#constructor-0)**() |
| **[PersistentValueTemplate](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PersistentValueTemplate](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "data" >}} | [PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata) |
| {{< prop "derivedFormulaRefs" >}} | [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PersistentValueTemplate" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistentValueTemplate {#constructor-0}

> **PersistentValueTemplate**()

Creates a new [PersistentValueTemplate](/vext/ref/fb/persistentvaluetemplate) frostbite instance.

### PersistentValueTemplate {#constructor-1}

> **PersistentValueTemplate**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistentValueTemplate](/vext/ref/fb/persistentvaluetemplate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PersistentValueTemplate {#constructor-2}

> **PersistentValueTemplate**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PersistentValueTemplate](/vext/ref/fb/persistentvaluetemplate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PersistentValueTemplate](/vext/ref/fb/persistentvaluetemplate). |

## Properties

### {{% prop-heading "data" %}}

> **[PersistentValueTemplateData](/vext/ref/fb/persistentvaluetemplatedata)**

### {{% prop-heading "derivedFormulaRefs" %}}

> **[AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PersistentValueTemplate](/vext/ref/fb/persistentvaluetemplate) type.

