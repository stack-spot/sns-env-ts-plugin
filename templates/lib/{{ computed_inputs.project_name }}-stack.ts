import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SnsAppJsiiComponent } from '@stackspot/cdk-env-sns';

class {{ computed_inputs.app_class_name }}Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const snsTopic = new SnsAppJsiiComponent(this, '{{ computed_inputs.app_class_name }}Topic', {
      displayName: '{{ inputs.topic_name }}',
      fifo: {% if inputs.topic_fifo %}true{% else %}false{% endif %},
      topicName: '{{ inputs.topic_name }}',
      contentBasedDeduplication: false,
    });
  }
}
