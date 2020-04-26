---
title: EmitterData
---

Inherits from 
[ProcessorData](/vext/ref/fb/processordata)

## Summary
### Constructors
| |
| ----------- |
| **[EmitterData](#constructor-0)**() |
| **[EmitterData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EmitterData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[EmitterData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[EmitterData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "emitterAssets" >}} | [EmitterDocument](/vext/ref/fb/emitterdocument)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EmitterData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EmitterData {#constructor-0}
> **EmitterData**()

Creates a new [EmitterData](/vext/ref/fb/emitterdata) frostbite instance.

### EmitterData {#constructor-1}
> **EmitterData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EmitterData](/vext/ref/fb/emitterdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EmitterData {#constructor-2}
> **EmitterData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [EmitterData](/vext/ref/fb/emitterdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [EmitterData](/vext/ref/fb/emitterdata). |

### EmitterData {#constructor-3}
> **EmitterData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [EmitterData](/vext/ref/fb/emitterdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [EmitterData](/vext/ref/fb/emitterdata). |

### EmitterData {#constructor-4}
> **EmitterData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterData](/vext/ref/fb/emitterdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EmitterData](/vext/ref/fb/emitterdata). |

## Properties
### {{% prop-heading "emitterAssets" %}}
> **[EmitterDocument](/vext/ref/fb/emitterdocument)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EmitterData](/vext/ref/fb/emitterdata) type.

